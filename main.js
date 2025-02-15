let isSubscribed = false;

// Sample article content
const articles = {
  1: {link: "./lessons/les1.html"},
  2: {link: "./lessons/les2.html"},
  3: {link: "./lessons/les3.html"},
  4: {link: "./lessons/les4.html"},
  5: {link: "./lessons/les5.html"},
};

const quizes = {
  1: { link: "./quizes/quiz1.html" },
  2: { link: "./quizes/quiz2.html" },
  3: { link: "./quizes/quiz3.html" },
  4: { link: "./quizes/quiz4.html" },
  5: { link: "./quizes/quiz5.html" },
}

function openArticle(articleId) {
  if (articleId <= 5 || isSubscribed) {
    const art = articles[articleId];
    window.open(art.link, "_blank");
  } else {
    alert("Пожалуйста, оплатите подписку для открытия этого урока");
  }
}

function openQuiz(id){
  if (id <= 5 || isSubscribed) {
    const quiz = quizes[id];
    window.open(quiz.link, "_blank");
  } else {
    alert("Пожалуйста, оплатите подписку для открытия этого урока");
  }
}

function closeModal() {
  document.getElementById("articleModal").style.display = "none";
}


function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
  
    // Basic validation
    if (!data.name || !data.email || !data.cardNumber || !data.expiryDate || !data.cvv || !data.plan) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Simulate payment processing
    alert(`Thank you, ${data.name}! Your subscription (${data.plan}) has been activated.`);
    isSubscribed = true;
    document.getElementById("paymentForm").reset(); // Clear the form
  }