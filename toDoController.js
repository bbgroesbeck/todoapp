/**
 * Created by i65114 on 1/6/17.
 */

function ToDoComponentCtrl($mdToast) {
    this.$mdToast = $mdToast;
    this.newTaskName;


}
// created by bryce groesbeck
ToDoComponentCtrl.prototype.add = function () {

   if (this.newTaskName != undefined){
       this.todo.list.push({name: this.newTaskName , completed: false});
       this.$mdToast.showSimple('Success, Task Added');
   }


};

//clears checked tasks.
ToDoComponentCtrl.prototype.clear = function () {
    var selected = false;

    for (var i = 0; i < this.todo.list.length; i++) {
        var task = this.todo.list[i];
        if (task.completed === true) {
            selected = true;
            this.todo.list.splice(i, 1);
            this.clear();
        }

    }

    if (selected === true) {
        this.$mdToast.showSimple('Yep, Task Cleared');
    }
};
// //need to open a new tab in the same page.
// ToDoComponentCtrl.prototype.newList = function () {
//     window.open('index.html', '_blank');
// };


// created by bryce groesbeck


//deletes the selected task.
ToDoComponentCtrl.prototype.remove = function (index) {
    this.todo.list.splice(index, 1)

    //mdtoast
    this.$mdToast.showSimple('Sad, Task Removed');
};


var toDoComponent = {
    templateUrl: 'toDo.html',
    controller: ToDoComponentCtrl,
    bindings: {
        todo: '='
    }
};
// created by bryce groesbeck