
        function placeOrder() {
            let pizzaQty = document.getElementById('pizza').value;
            let burgerQty = document.getElementById('burger').value;
            let pastaQty = document.getElementById('pasta').value;
            
            let total = (pizzaQty * 10) + (burgerQty * 5) + (pastaQty * 8);
            let orderDetails = "";
            
            if (pizzaQty > 0) orderDetails += `Pizza: ${pizzaQty}<br>`;
            if (burgerQty > 0) orderDetails += `Burger: ${burgerQty}<br>`;
            if (pastaQty > 0) orderDetails += `Pasta: ${pastaQty}<br>`;
            
            if (total > 0) {
                document.getElementById('orderSummary').style.display = 'block';
                document.getElementById('orderDetails').innerHTML = orderDetails;
                document.getElementById('totalPrice').innerText = total;
            } else {
                alert("Please select at least one item to order.");
            }
        }