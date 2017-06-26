const getTotalPriorityHours = priorities => priorities.reduce((total, priority) => total + priority.hours, 0)

export default getTotalPriorityHours
