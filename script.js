document.addEventListener("DOMContentLoaded", function () {
  // Typing effect for hero section
  var typed = new Typed("#typed-text", {
    strings: ["Ethical Hacker", "Developer", "Bot Developer", "Cybersecurity Developer", "AI Developer", "Web Developer", "Full-Stack Developer", "Python Developer", "App Developer", "Trading Bot Developer", "Telegram Bot Developer", "FinTech Developer", "UI/UX Developer", "Automation Developer", "Software Developer".

             ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });

  // GSAP: Fade in sections
  gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
  });

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate skill items
  gsap.utils.toArray(".skill-item").forEach((item) => {
    gsap.from(item, {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Bounce effect on Download CV button
  gsap.to("#download-cv", {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power1.inOut",
  });

  // Slide-in project cards
  gsap.from(".project-card", {
    x: (index) => (index % 2 === 0 ? -100 : 100),
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Testimonial carousel
  const testimonials = document.querySelectorAll(".testimonial-item");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((item, i) => {
      if (i === index) {
        item.classList.remove("hidden");
        gsap.to(item, { opacity: 1, x: 0, duration: 0.5 });
      } else {
        gsap.to(item, {
          opacity: 0,
          x: -50,
          duration: 0.5,
          onComplete: () => item.classList.add("hidden"),
        });
      }
    });
  }

  showTestimonial(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 5000);

  // Contact form submission
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const data = { name, email, message };

    // Simulate saving to JSON (requires backend for actual implementation)
    console.log("Saving to JSON:", data);
    alert("Message sent! (Simulated)");

    // Reset form
    contactForm.reset();
  });
});
