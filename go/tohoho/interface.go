package main

import "fmt"

// ToStringは個々の構造体で実装が異なるが、PrintOutは共通化可能.
// 'Printable'インターフェースは、ToStringメソッドをサポートしている構造体であれば、適用可能.
type Printable interface {
	ToString() string
}

func PrintOut(p Printable) {
	fmt.Println(p.ToString())
}

type Person struct {
	name string
}

func (p Person) ToString() string {
	return p.name
}

type Book struct {
	title string
}

func (b Book) ToString() string {
	return b.title
}

func main() {
	p := Person {name: "山田太郎"}
	b := Book {title: "吾輩は猫である"}
	PrintOut(p)
	PrintOut(b)
}