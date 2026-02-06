import React, { useEffect } from 'react';
import { TaskListScreen } from './src/screens/TaskListScreen';
import { useConfigStore } from './src/app/modules/config/store/config.store';

export default function App() {
  const loadConfig = useConfigStore(state => state.loadConfig);

  useEffect(() => {
    loadConfig();
  }, []);

  return <TaskListScreen />;
}
