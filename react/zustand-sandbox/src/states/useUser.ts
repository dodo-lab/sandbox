import create from 'zustand';

type State = {
  name: string;
  age: number;
  setName: (name: string) => void;
  setAge: (age: number) => void;
  clear: () => void;
};

export const useUser = create<State>(set => ({
  name: '',
  age: 0,
  setName: name => set({name}),
  setAge: age => set({age}),
  clear: () => set({name: '', age: 0}),
}));
