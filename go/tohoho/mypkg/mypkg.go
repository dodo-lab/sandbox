package mypkg

import "fmt"

// 大文字で始まるものは自動的にエクスポートされる
func FuncA() {
	fmt.Println("FuncA()")
}

// 小文字で始まるものはエクスポートされない
func funcB() {
	fmt.Println("funcB()")
}