let count = [];

function create() {
    let ticket_board = document.querySelector('.ticket_board');
    let ticket = document.createElement("h1");
    ticket_board.appendChild(ticket);
    count.push(ticket);
    document.querySelector(".counter span").innerHTML = count.length;
}