function get_todos() {
    /**/
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');

    if (todos_str != null) {
        todos = JSON.parse(todos_str);
    }

    return todos;
}

function add() {
    /**/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);

    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';

    show();
    return false;
}

function remove() {
    console.log('Start removing...');
    console.log('getAttribute:' + this.addEventListener);
    /**/
    var btn_id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(btn_id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    //
    show();
    return false;
}

function show() {
    console.log('Start show()...');
    /**/
    var todos = get_todos();
    var html = '<ul class="todo_list">';

    for (let i = 0; i < todos.length; i++) {
        html += '<li>' + (i + 1) + ' ) ' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';
    }

    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName("remove");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

/**/
document.getElementById('add').addEventListener('click', add);

show();