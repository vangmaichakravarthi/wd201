const todolist = () => {
    const all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overque = () => {
      const currentDate = new Date();
      const overdueItems = all.filter(item => item.dueDate < currentDate && !item.completed);
      return overdueItems;
    };
  
    const dueToday = () => {
      const currentDate = new Date();
      const dueTodayItems = all.filter(item => item.dueDate.getDate() === currentDate.getDate() &&
                                              item.dueDate.getMonth() === currentDate.getMonth() &&
                                              item.dueDate.getFullYear() === currentDate.getFullYear());
      return dueTodayItems;
    };
  
    const dueLater = () => {
      const currentDate = new Date();
      const dueLaterItems = all.filter(item => item.dueDate > currentDate);
      return dueLaterItems;
    };
  
    const toDisplayableList = (list) => {
      let output = '';
      list.forEach((item, index) => {
        output += `${index + 1}. [${item.completed ? 'x' : ' '}] ${item.description} - Due: ${item.dueDate.toDateString()}\n`;
      });
      return output;
    };
  
    return {
      add,
      markAsComplete,
      overque,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
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
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
