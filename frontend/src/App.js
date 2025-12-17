import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [apiStatus, setApiStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/users`);
      const data = await response.json();
      setUsers(data);
      setApiStatus('Kết nối thành công!');
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      setApiStatus('Lỗi kết nối API');
    }
    setLoading(false);
  };

  const checkHealth = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`);
      const data = await response.json();
      setApiStatus(`API Status: ${data.status} - Uptime: ${Math.floor(data.uptime)}s`);
    } catch (error) {
      setApiStatus('API không khả dụng');
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333' }}>🐳 Bài tập Docker</h1>
        <p style={{ color: '#666' }}>Frontend React + Backend Node.js</p>
      </header>

      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h2>Trạng thái API</h2>
        <p style={{ 
          color: apiStatus.includes('thành công') || apiStatus.includes('OK') ? 'green' : 'red' 
        }}>
          {apiStatus}
        </p>
        <button 
          onClick={checkHealth}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Kiểm tra API
        </button>
        <button 
          onClick={fetchUsers}
          disabled={loading}
          style={{
            backgroundColor: loading ? '#ccc' : '#28a745',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Đang tải...' : 'Lấy danh sách Users'}
        </button>
      </div>

      {users.length > 0 && (
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
        }}>
          <h2>Danh sách Users</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            {users.map(user => (
              <div 
                key={user.id} 
                style={{ 
                  padding: '10px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <strong>{user.name}</strong> - {user.email}
              </div>
            ))}
          </div>
        </div>
      )}

      <footer style={{ textAlign: 'center', marginTop: '30px', color: '#666' }}>
        <p>Ứng dụng chạy trong Docker containers</p>
      </footer>
    </div>
  );
}

export default App;