// 送出留言並顯示
document.getElementById('tributeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const tributeDiv = document.createElement('div');
    tributeDiv.classList.add('tribute');
    tributeDiv.innerHTML = `<p><strong>${name}</strong> 於 ${new Date().toLocaleString()} 留言：<br>${message}</p>`;
    
    document.getElementById('tributesList').appendChild(tributeDiv);
    
    // 清空表單
    document.getElementById('tributeForm').reset();
});

// 點亮燭光功能
document.getElementById('lightCandleBtn').addEventListener('click', function() {
    const candleDiv = document.getElementById('candleDisplay');
    candleDiv.innerHTML = `<img src="https://i4.momoshop.com.tw/1695546811/goodsimg/0011/900/311/11900311_O_m.webp" alt="燭光">`; // 這裡換成您的燭光圖片鏈接
    candleDiv.style.display = 'block';
});
