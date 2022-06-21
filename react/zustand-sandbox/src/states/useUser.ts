import create from 'zustand';

type State = {
  name: string;
  age: number;
  setName: (name: string) => void;
  setAge: (age: number) => void;
};

export const useUser = create<State>(set => ({
  name: '',
  age: 0,
  setName: name => set(state => ({name, age: state.age})),
  setAge: age => set(state => ({name: state.name, age})),
}));
