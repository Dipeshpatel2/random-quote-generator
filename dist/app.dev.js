"use strict";

var quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela", "The only way to do great work is to love what you do. - Steve Jobs", "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln", "Believe you can and you're halfway there. - Theodore Roosevelt", "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt", "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill", "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt", "The best way to predict the future is to create it. - Peter Drucker", "The secret of getting ahead is getting started. - Mark Twain", "Don't watch the clock; do what it does. Keep going. - Sam Levenson"];
var button = document.querySelector(".container__button");
var quoteText = document.getElementById("quote-text");

var handleQuoteChange = function handleQuoteChange() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[randomIndex];
};

button.addEventListener("click", handleQuoteChange);