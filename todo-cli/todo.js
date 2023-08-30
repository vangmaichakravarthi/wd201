const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    overdues = []
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate < new Date().toLocaleDateString('en-CA')) {
        overdues.push(all[i])
      }
    }
    return overdues
  }

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    dueLaters = [];
    for(let i =0; i< all.length; i++){
      if(all[i].dueDate > new Date().toLocaleDateString("en-CA")){
        dueLaters.push(all[i]);
      }
    }
    return dueLaters;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    return list
    .map((item) => {
      let checkbox = item.completed ? "[x]" : "[ ]";
      const formattedDate =
      item.dueDate !== new Date().toISOString().split("T")[0]
      ? " " + item.dueDate
      : "";
      return [checkbox + " " + item.title + formattedDate];
    })
    .join("\n");
   
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  }
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList()

const formattedDate = d => {
  return d.toISOString().split('T')[0]
}

const dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log('My Todo-list\n')

console.log('Overdue')
var overdues = todos.overdue()
const formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log('\n')

console.log('Due Today')
const itemsDueToday = todos.dueToday()
const formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log('\n')

console.log('Due Later')
const itemsDueLater = todos.dueLater()
const formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
//console.log('\n\n')
