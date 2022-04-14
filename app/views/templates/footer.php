<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script>
    let list = document.querySelectorAll('.list');
    for (let i = 0; i<list.length; i++){
        list[i].onclick = function(){
            let j = 0;
            while(j < list.length){
                list[j++].className = 'list';
            }
            list[i].className = 'list active';
        }
    }
</script>
</body>
</html>