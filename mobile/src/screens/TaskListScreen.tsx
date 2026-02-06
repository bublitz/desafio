import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { useTasks } from '../app/modules/tasks/hooks/useTasks';
import { Loading } from '../app/shared/components/Loading';

export function TaskListScreen() {
  const { tasks, loading, loadTasks, addTask } = useTasks();
  const [title, setTitle] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{ marginTop: 16, padding: 16 }}>
      <TextInput
        placeholder="Nova tarefa"
        value={title}
        onChangeText={setTitle}
        style={{
          color: 'white',
          borderWidth: 1,
          borderColor: 'cyan',
          marginBottom: 8,
        }}
      />

      <Button
        title="Adicionar"
        onPress={() => {
          addTask(title);
          setTitle('');
        }}
      />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ marginTop: 8, color: 'white' }}>{item.title}</Text>
        )}
      />
    </View>
  );
}
