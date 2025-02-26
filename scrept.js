const headr = document.querySelector("header");

window.addEventListener("scroll",function(){
    headr.classList.toggle("stiky", window.scrollY > 0)
})

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
})

window.addEventListener('scroll',()=>{
    menu.classList.remove('active');
    navbar.classList.remove('active');
})

// form submit

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    let formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("The message has been sent successfully.!");
            this.reset(); // إعادة تعيين النموذج بعد الإرسال
        } else {
            alert("An error occurred while sending. Please try again."

);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const form = event.target;
    const formData = new FormData(form); // جمع بيانات النموذج
    const responseMessage = document.getElementById("responseMessage");

    try {
        const response = await fetch("https://formsubmit.io/send/mohammedalhassannumair@gmail.com", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            showMessage("تم إرسال الرسالة بنجاح!", "success");
            form.reset(); // تفريغ الحقول بعد الإرسال الناجح
        } else {
            throw new Error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
        }
    } catch (error) {
        showMessage(error.message, "error");
    }
});

// دالة عرض الرسالة مع تأثير بصري وإخفائها تلقائيًا
function showMessage(message, type) {
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.innerHTML = message;
    responseMessage.style.color = type === "success" ? "green" : "red";
    responseMessage.style.opacity = "1";
    
    // إخفاء الرسالة بعد 5 ثوانٍ
    setTimeout(() => {
        responseMessage.style.opacity = "0";
    }, 5000);
}