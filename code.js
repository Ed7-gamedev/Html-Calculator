document.addEventListener("DOMContentLoaded", () => {
    let res = "";

    const resSpan = document.getElementById('resultado');
    resSpan.textContent = res;

    const buttons = document.querySelectorAll('.linha button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.textContent;
            console.log(value);

            if (value === 'C') {
                res = "";
                resSpan.textContent = res;
                return;
            }

            if (value === '=') {
                try {
                    res = eval(res).toString(); // calcula a expressão
                } catch (error) {
                    res = "Erro";
                }
                resSpan.textContent = res;
                return;
            }

            res += value;
            resSpan.textContent = res;
        });
    });
});
