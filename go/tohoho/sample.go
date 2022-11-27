package main

import "fmt"

func print() {
	num, str := 123, "ABC"

	fmt.Print("num=", num, " str=", str, "\n")
	fmt.Println("num=", num, " str=", str)
	fmt.Printf("num=%d str=%s\n", num, str)
}

func main() {
	fmt.Println("hello, world")
	print()
}
