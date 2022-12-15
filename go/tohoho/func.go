package main

import "fmt"

// 複数の値を返す場合、型名を()で囲む
func addMinus(x int, y int) (int, int) {
	add := x + y
	minus := x - y

	return add, minus
}

// ...で可変長引数を実現
func total(a int, b ... int) int {
	ret := a
	for _, num := range b {
		ret += num
	}

	return ret
}

func main() {
	add, minus := addMinus(5, 4)
	fmt.Printf("add = %d, minus = %d\n", add, minus)

	// 不要な戻り値はブランク変数(_)で無視してもOK
	_, minus2 := addMinus(5, 4)
	fmt.Printf("minus = %d\n", minus2)

	num := total(1, 2, 3, 4, 5)
	fmt.Printf("num = %d\n", num)
}