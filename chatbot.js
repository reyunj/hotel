// Chat Widget - Rule-based responses (no API key needed)
const RESPONSES = {
    greetings: [
        "Welcome to Tagboanan Beach Resort! 🌊 How can I help you today?",
        "Hello! I'm here to help with any questions about our resort. What would you like to know?",
        "Hi there! Welcome to paradise in Northern Cebu. How can I assist you?"
    ],
    rooms: [
        "We offer a range of accommodations from luxury suites to shared dorms! 🏨 Each room comes with access to our beautiful beach and awesome specialty coffee. You can book through our booking page!",
        "Our accommodations include luxury suites, comfortable rooms, and budget-friendly shared dorms. All guests enjoy beach access and our famous specialty coffee. Check booking.html for availability!",
        "From luxury suites to shared dorms, we have something for every traveler! 🏖️ All rooms include beach access and you can enjoy our specialty coffee. Visit our booking page to see options and make a reservation."
    ],
    amenities: [
        "Our resort features beach access, cottage rentals, specialty coffee, unique experiences, and we're perfect for weddings and events! 🌴 We also focus on sustainable tourism, supporting local fishermen.",
        "We offer beach access, cozy cottages, amazing specialty coffee, curated experiences, and event hosting. Plus, we're committed to sustainable tourism that supports our local community! 🌊",
        "Amenities include: pristine beach access, cottage rentals, our famous specialty coffee shop, unique local experiences, and venue space for weddings and events. We pride ourselves on sustainable tourism! 💚"
    ],
    booking: [
        "Booking is easy! 📅 Just visit our booking.html page where you can select your dates, choose your room type, and complete your reservation. You can also call us at +63 998 853 3030!",
        "To book your stay, head over to our booking page (booking.html). You'll find all our room options, availability, and can complete your reservation online. Prefer to call? We're at +63 998 853 3030!",
        "Ready to book? 🏝️ Visit booking.html to see available rooms and make your reservation. You can also contact us directly at +63 998 853 3030 or reservations@tagboananbeach.com"
    ],
    beach: [
        "Our beach passes are perfect for day visitors! 🏖️ You can enjoy our pristine beach, rent cottages, and experience the beauty of Northern Cebu. Check beachpasses.html for pricing and options!",
        "Beach passes give you access to our beautiful coastline for the day! We also offer cottage rentals for extra comfort. Visit beachpasses.html to see all options and pricing.",
        "Love the beach? 🌊 Our beach passes are available for day visitors who want to enjoy our paradise. Cottage rentals are also available. Check beachpasses.html for details!"
    ],
    location: [
        "We're located at Borbon Rd, Borbon, Cebu, Philippines 📍 in the beautiful Northern Cebu region. You can get directions using the link on our contact page!",
        "Tagboanan Beach Resort is in Borbon, Northern Cebu, Philippines. It's a stunning coastal location perfect for a relaxing getaway. Use the 'Get Directions' button on our contact page!",
        "Find us at Borbon Rd, Borbon, Cebu, Philippines! 🇵🇭 We're in Northern Cebu, known for its pristine beaches and warm hospitality."
    ],
    contact: [
        "You can reach us at +63 998 853 3030 or email reservations@tagboananbeach.com 📞 We're also on Facebook - search for Tagboanan Beach Resort!",
        "Contact us anytime! Phone: +63 998 853 3030, Email: reservations@tagboananbeach.com. Follow us on Facebook for updates and beautiful photos of our resort!",
        "Get in touch: 📞 +63 998 853 3030 or 📧 reservations@tagboananbeach.com. You can also find us on Facebook @tagboananbeachresort"
    ],
    coffee: [
        "We're proud of our awesome specialty coffee! ☕ Perfect for starting your day or relaxing in the afternoon. Our coffee is sourced locally and crafted with care.",
        "Our specialty coffee is one of our highlights! ☕ We serve locally-sourced, expertly crafted coffee that's perfect with ocean views. Come taste the difference!",
        "Coffee lovers rejoice! ☕ Our specialty coffee is famous among guests. Sourced locally and prepared with care, it's the perfect complement to your beach experience."
    ],
    wedding: [
        "We're a perfect venue for weddings and events! 💒 Our beach setting provides a stunning backdrop for your special day. Contact us to discuss packages and availability.",
        "Looking for a dream wedding venue? 🌊 Our beach resort offers a beautiful setting for weddings and special celebrations. Contact us at reservations@tagboananbeach.com to plan your event!",
        "Weddings and events are our specialty! 💍 With our pristine beach as your backdrop, your celebration will be unforgettable. Reach out to discuss options!"
    ],
    sustainability: [
        "Sustainability is at our heart! 💚 We support local fishermen, practice coastal preservation, and believe in harmony between tourism and our local community.",
        "We're committed to sustainable tourism! 🌱 Our pristine beach is shared with local fishermen, and we actively support coastal preservation and our local community.",
        "Sustainability isn't just a slogan for us - it's how we operate. 💚 We support local fishermen, preserve our coastline, and ensure tourism benefits our community."
    ],
    default: [
        "I'd be happy to help with that! For detailed information, please contact us at +63 998 853 3030 or reservations@tagboananbeach.com. You can also explore our website for more details! 🌊",
        "Great question! For the most accurate and up-to-date information, I recommend contacting us directly at +63 998 853 3030 or visiting our booking page. Is there anything else I can help with?",
        "I want to make sure you get the best information! Please contact our team at +63 998 853 3030 or check our website. We're here to help! 🏨"
    ]
};

let isChatOpen = false;
let isTyping = false;

// Inject chat widget HTML
function injectChatWidget() {
    const chatWidgetHTML = `
        <div class="chat-widget">
            <button class="chat-button" onclick="toggleChat()" aria-label="Open chat">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
                <span class="chat-badge">1</span>
            </button>

            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <div class="chat-header-avatar">🏨</div>
                    <div class="chat-header-info">
                        <h3>Tagboanan Assistant</h3>
                        <p>Always here to help</p>
                    </div>
                    <button class="chat-close" onclick="toggleChat()" aria-label="Close chat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>

                <div class="chat-messages" id="chatMessages">
                    <div class="message bot">
                        Welcome to Tagboanan Beach Resort! 🌊 I'm your AI assistant, here to help you with bookings, room information, amenities, and anything else about our paradise in Northern Cebu. How can I assist you today?
                    </div>
                </div>

                <div class="quick-actions">
                    <button class="quick-action" onclick="sendQuickMessage('What rooms do you have?')">Rooms</button>
                    <button class="quick-action" onclick="sendQuickMessage('Tell me about amenities')">Amenities</button>
                    <button class="quick-action" onclick="sendQuickMessage('How do I book?')">Book Now</button>
                    <button class="quick-action" onclick="sendQuickMessage('Beach pass prices')">Beach Passes</button>
                </div>

                <div class="chat-input-area">
                    <input type="text" class="chat-input" id="chatInput" placeholder="Type your message..." onkeypress="handleKeyPress(event)">
                    <button class="chat-send" id="chatSend" onclick="sendMessage()" aria-label="Send message">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);
}

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const badge = document.querySelector('.chat-badge');
    
    isChatOpen = !isChatOpen;
    chatWindow.classList.toggle('active');
    
    if (isChatOpen) {
        badge.style.display = 'none';
        document.getElementById('chatInput').focus();
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function sendQuickMessage(message) {
    document.getElementById('chatInput').value = message;
    sendMessage();
}

function addMessage(content, isUser = false, isTyping = false) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    
    if (isTyping) {
        messageDiv.className = 'message typing';
        messageDiv.innerHTML = `
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
    } else {
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        messageDiv.textContent = content;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    return messageDiv;
}

function removeTypingIndicator() {
    const typingIndicator = document.querySelector('.message.typing');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function getResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for keywords and return appropriate response category
    if (lowerMessage.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/)) {
        return getRandomResponse('greetings');
    }
    if (lowerMessage.includes('room') || lowerMessage.includes('accommodat') || lowerMessage.includes('stay') || lowerMessage.includes('suite') || lowerMessage.includes('dorm')) {
        return getRandomResponse('rooms');
    }
    if (lowerMessage.includes('amenit') || lowerMessage.includes('feature') || lowerMessage.includes('offer') || lowerMessage.includes('facility')) {
        return getRandomResponse('amenities');
    }
    if (lowerMessage.includes('book') || lowerMessage.includes('reserve') || lowerMessage.includes('reservation')) {
        return getRandomResponse('booking');
    }
    if (lowerMessage.includes('beach') || lowerMessage.includes('pass') || lowerMessage.includes('day visit')) {
        return getRandomResponse('beach');
    }
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('address') || lowerMessage.includes('located') || lowerMessage.includes('direction')) {
        return getRandomResponse('location');
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('call') || lowerMessage.includes('reach')) {
        return getRandomResponse('contact');
    }
    if (lowerMessage.includes('coffee') || lowerMessage.includes('cafe') || lowerMessage.includes('drink')) {
        return getRandomResponse('coffee');
    }
    if (lowerMessage.includes('wedding') || lowerMessage.includes('event') || lowerMessage.includes('celebration') || lowerMessage.includes('party')) {
        return getRandomResponse('wedding');
    }
    if (lowerMessage.includes('sustain') || lowerMessage.includes('environment') || lowerMessage.includes('eco') || lowerMessage.includes('green') || lowerMessage.includes('fisherman')) {
        return getRandomResponse('sustainability');
    }
    
    return getRandomResponse('default');
}

function getRandomResponse(category) {
    const responses = RESPONSES[category];
    return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message || isTyping) return;
    
    addMessage(message, true);
    input.value = '';
    
    isTyping = true;
    addMessage('', false, true);
    
    // Simulate typing delay for natural feel
    setTimeout(() => {
        removeTypingIndicator();
        const response = getResponse(message);
        addMessage(response, false);
        isTyping = false;
    }, 800 + Math.random() * 700);
}

// Initialize chat widget when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectChatWidget);
} else {
    injectChatWidget();
}
