import React, { useState, useEffect } from 'react';
import './App.css'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/api/tasks`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    try {
      const response = await fetch(`${API_URL}/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newTask })
      });
      
      if (response.ok) {
        setNewTask('');
        fetchTasks();
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>✨ Task Manager</h1>
      </div>
      
      <div className="form-section">
        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to be done?"
            className="task-input"
          />
          <button type="submit" className="add-button">
            Add Task
          </button>
        </form>
      </div>

      <div className="tasks-section">
        <div className="tasks-header">
          <h2 className="tasks-title">Your Tasks</h2>
          <span className="task-count">{tasks.length} tasks</span>
        </div>
        
        {tasks.length === 0 ? (
          <div className="no-tasks">
            <p>No tasks yet. Add your first task above! 🚀</p>
          </div>
        ) : (
          tasks.map(task => (
            <div key={task.id} className="task-item">
              <div className="task-text">{task.text}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;