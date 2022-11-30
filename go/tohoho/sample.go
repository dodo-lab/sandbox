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

func typeConvert() {
	var n1 uint16 = 1234
	var n2 uint32 = uint32(n1)
	fmt.Printf("n1=%d n2=%d\n", n1, n2)

	var n3 uint32 = 123456
	var n4 uint16 = uint16(n3)
	fmt.Printf("n3=%d n4=%d\n", n3, n4)
}

func arrayTest() {
	// 配列はコンパイル時に要素数が決定するため、増減不可.
	a1 := [3]string{}
	a1[0] = "Red"
	a1[1] = "Green"
	a1[2] = "Blue"
	fmt.Println(a1[0], a1[1], a1[2])

	// 初期化によって配列要素数が決まる場合は、要素数の指定を[...]とすることが可能.
	a2 := [...]string{"Yellow", "Pink"}
	fmt.Println(a2[0], a2[1])
}

func main() {
	fmt.Println("hello, world")
	print()
	typeAlias()
	typeConvert()
	arrayTest()
}
