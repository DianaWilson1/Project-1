// shopping card
document.addEventListener("DOMContentLoaded", function () {
    const cartButton = document.querySelector("#actions button");
    const cartDropdown = document.createElement("div");
    cartDropdown.classList.add("cart-dropdown");
    cartDropdown.style.position = "absolute";
    cartDropdown.style.background = "white";
    cartDropdown.style.border = "1px solid #ccc";
    cartDropdown.style.padding = "10px";
    cartDropdown.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    cartDropdown.style.display = "none";
    cartDropdown.style.right = "0";
    cartDropdown.style.top = "40px";
    cartDropdown.style.width = "200px";
    cartDropdown.style.zIndex = "1000";
    cartButton.style.position = "relative";
    
    cartButton.appendChild(cartDropdown);
    
    document.querySelectorAll(".card").forEach(card => {
        const addButton = card.querySelector("button");
        addButton.addEventListener("click", function () {
            const itemName = card.querySelector("h3").innerText;
            const itemPrice = card.querySelector("p").innerText;
            
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.style.borderBottom = "1px solid #ddd";
            cartItem.style.padding = "5px 0";
            cartItem.innerHTML = `<p style="margin: 0; color: black;">${itemName} - ${itemPrice}</p>`;
            cartDropdown.appendChild(cartItem);
        });
    });
    
    cartButton.addEventListener("click", function (event) {
        event.stopPropagation();
        cartDropdown.style.display = cartDropdown.style.display === "none" ? "block" : "none";
    });
    
    document.addEventListener("click", function (event) {
        if (!cartButton.contains(event.target)) {
            cartDropdown.style.display = "none";
        }
    });
});
// Tooltip for Shopping Bag Icon
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button i.fas.fa-shopping-bag");
    
    if (button) {
        const tooltip = document.createElement("div");
        tooltip.textContent = "Shopping Bag";
        tooltip.style.position = "absolute";
        tooltip.style.background = "black";
        tooltip.style.color = "white";
        tooltip.style.padding = "5px 10px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.fontSize = "12px";
        tooltip.style.visibility = "hidden";
        tooltip.style.whiteSpace = "nowrap";
        tooltip.style.transition = "opacity 0.2s";
        tooltip.style.opacity = "0";
        tooltip.style.pointerEvents = "none";
        tooltip.style.zIndex = "1000";
        
        document.body.appendChild(tooltip);
        
        button.addEventListener("mouseenter", function (event) {
            tooltip.style.left = event.pageX + "px";
            tooltip.style.top = event.pageY + 20 + "px";
            tooltip.style.visibility = "visible";
            tooltip.style.opacity = "1";
        });
        
        button.addEventListener("mouseleave", function () {
            tooltip.style.visibility = "hidden";
            tooltip.style.opacity = "0";
        });
    }
});
// notification
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const popup = document.createElement("div");
        popup.innerHTML = "Did you already have become a member? <br><a href='/main-pages/registration.html' style='color: blue; text-decoration: underline;'>Register here for get 50% down by first order</a>";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "white";
        popup.style.color = "black";
        popup.style.padding = "20px";
        popup.style.borderRadius = "10px";
        popup.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        popup.style.zIndex = "1000";
        popup.style.fontSize = "20px";
        popup.style.textAlign = "center";
        document.body.appendChild(popup);
        
        setTimeout(function () {
            popup.remove();
        }, 30000);
    }, 10000);
});
// night button
document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.innerHTML = '🌙';
    document.getElementById('destinations').appendChild(button);

    const originalNavColor = getComputedStyle(document.querySelector('nav')).backgroundColor;
    const originalMainColor = getComputedStyle(document.querySelector('main')).backgroundColor;

    button.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        const main = document.querySelector('main');
        
        if (nav.style.backgroundColor === 'black' && main.style.backgroundColor === 'black') {
            nav.style.backgroundColor = originalNavColor;
            main.style.backgroundColor = originalMainColor;
        } else {
            nav.style.backgroundColor = 'black';
            main.style.backgroundColor = 'black';
        }
    });
});
