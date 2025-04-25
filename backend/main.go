package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

var botToken = os.Getenv("TELEGRAM_BOT_TOKEN")
var chatID = os.Getenv("TELEGRAM_CHAT_ID")

type ContactRequest struct {
	Name    string `json:"name"`
	Phone   string `json:"phone"`
	Message string `json:"message"`
}

type Response struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

func sendTelegramMessage(message string) error {
	url := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", botToken)

	body, err := json.Marshal(map[string]string{
		"chat_id": chatID,
		"text":    message,
	})
	if err != nil {
		return err
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(body))
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("unexpected status: %s", resp.Status)
	}

	return nil
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req ContactRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	messageText := fmt.Sprintf(
		"New contact form submission:\nName: %s\nEmail: %s\nMessage: %s",
		req.Name,
		req.Email,
		req.Message,
	)

	if err := sendTelegramMessage(messageText); err != nil {
		log.Printf("Failed to send Telegram message: %v", err)
		http.Error(w, "Failed to send message", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(Response{
		Success: true,
		Message: "Message sent successfully",
	})
}

func main() {
	http.HandleFunc("/api/contact", contactHandler)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
