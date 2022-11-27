package main

import "fmt"

func print() {
	num, str := 123, "ABC"
	const age = 20

	fmt.Print("num=", num, " str=", str, "\n")
	fmt.Println("num=", num, " str=", str)
	fmt.Printf("num=%d str=%s age=%d\n", num, str, age)
}

func typeAlias() {
	type UtcTime string // string型の別名 UtcTime を定義
	var time UtcTime = "00:00:00"
	fmt.Printf("time=%s\n", time)
}

func main() {
	fmt.Println("hello, world")
	print()
	typeAlias()
}
