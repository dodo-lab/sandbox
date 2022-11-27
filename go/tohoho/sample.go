package main

import "fmt"

func print() {
	num, str := 123, "ABC"
	const age = 20

	fmt.Print("num=", num, " str=", str, "\n")
	fmt.Println("num=", num, " str=", str)
	fmt.Printf("num=%d str=%s age=%d\n", num, str, age)
}

func main() {
	fmt.Println("hello, world")
	print()
}
