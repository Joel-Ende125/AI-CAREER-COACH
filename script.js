document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value.trim();
    const chatOutput = document.getElementById("chat-output");

    if (userInput === "") {
        alert("Please enter a question!");
        return;
    }

    // Display the user's message
    const userMessage = `<div class="user-message"><strong>You:</strong> ${userInput}</div>`;
    chatOutput.innerHTML += userMessage;

    // Simulate AI response
    setTimeout(() => {
        const aiMessage = generateCareerAdvice(userInput);
        chatOutput.innerHTML += `<div class="ai-message"><strong>Coach:</strong> ${aiMessage}</div>`;
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }, 1000);

    document.getElementById("user-input").value = "";
});

// Career Advice Generator
function generateCareerAdvice(input) {
    const responses = {
        "AI Research Scientist": "Stay current by following research papers and AI conferences like NeurIPS.",
        "Machine Learning Engineer": "Master algorithms, statistical methods, and frameworks like TensorFlow.",
        "Data Scientist": "Focus on analyzing data effectively and translating it into actionable insights.",
        "Research Engineer (AI/ML)": "Work on interdisciplinary skills and hands-on experiments with AI models.",
        "NLP Specialist": "Learn language models like GPT and transformers; stay updated on advancements.",
        "Computer Vision Engineer": "Deep dive into image recognition and object detection using frameworks like OpenCV.",
        "Robotics Engineer": "Combine mechanical knowledge with AI for creating smart, autonomous systems.",
        "AI Ethics Researcher": "Understand AI biases and ethical implications while designing fair systems.",

        "AI Software Developer": "Get comfortable with AI libraries and deployment pipelines for scalable solutions.",
        "Machine Learning Developer": "Optimize machine learning models for efficiency and accuracy.",
        "Deep Learning Engineer": "Specialize in neural networks and deep learning frameworks.",
        "AI Solutions Architect": "Design large-scale AI solutions with cloud platforms like AWS or Azure.",
        "AI Product Manager": "Focus on both technical knowledge and customer-centric product development.",

        "Data Analyst": "Develop skills in data visualization tools like Tableau or Power BI.",
        "Big Data Engineer": "Learn distributed data systems like Hadoop and Spark.",
        "Data Engineer": "Focus on ETL processes and building robust data pipelines.",
        "Business Intelligence Analyst": "Use data to create actionable business strategies.",
        "Data Architect": "Design scalable and secure data architectures.",

        "Cloud AI Engineer": "Learn to deploy and manage AI applications on the cloud.",
        "AI DevOps Engineer": "Combine DevOps practices with AI-specific model deployment skills.",
        "MLOps Engineer": "Focus on monitoring, automation, and operationalization of AI models.",
        "AI Infrastructure Engineer": "Build robust back-end systems for AI applications.",

        "Healthcare AI Specialist": "Understand medical data and apply AI to solve healthcare challenges.",
        "Autonomous Vehicle Engineer": "Specialize in self-driving technology using AI and robotics.",
        "Financial AI Analyst": "Apply AI to algorithmic trading and fraud detection.",
        "AI Legal Consultant": "Focus on AI regulation, compliance, and policy.",
        "AI in Education": "Work on EdTech innovations, such as adaptive learning algorithms.",
        "Game AI Developer": "Create intelligent NPC behaviors and game AI systems.",

        "AI Policy Analyst": "Learn the intersection of policy and AI technology.",
        "AI Governance Specialist": "Focus on accountability frameworks for AI deployment.",
        "Responsible AI Advocate": "Work on ethical AI practices and community engagement.",

        "AI Consultant": "Provide tailored AI solutions to businesses.",
        "AI Sales Engineer": "Combine technical expertise with sales strategies.",
        "AI Product Marketing Manager": "Focus on positioning AI products in the market.",
        "Customer Success Manager": "Help clients maximize the value of AI solutions.",

        "AI Professor/Lecturer": "Stay updated and teach cutting-edge AI concepts.",
        "AI Trainer/Instructor": "Develop simplified AI tutorials for learners.",
        "AI Curriculum Developer": "Create comprehensive AI educational material.",

        "AI Artist": "Experiment with generative art tools like DALL·E and Stable Diffusion.",
        "AI Experience Designer": "Work on AI-driven UI/UX experiences.",
        "AI Content Creator": "Leverage AI tools to generate innovative content.",

        "AI Cybersecurity Specialist": "Focus on AI vulnerabilities and data protection strategies.",
        "AI Risk Manager": "Mitigate risks associated with AI deployments.",
        "AI Compliance Officer": "Ensure AI systems meet regulatory standards."
    };

    // Match input with the defined roles
    for (let keyword in responses) {
        if (input.toLowerCase().includes(keyword.toLowerCase())) {
            return responses[keyword];
        }
    }

    return "Explore various career options through online courses and professional coaching.";
}
