import { Button } from "./ui/button";
import { ThemeToggle } from "@/components/mode-toggle"

export default function navBar() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>CRM</h1>
        <ul className="flex gap-4 justify-between items-center">
            <li><Button>Customers</Button></li>
            <li><Button>leeds</Button></li>
            <li><Button>logout</Button></li>
            <li> <ThemeToggle /></li>
        </ul>

      </div>
    </div>
  )
}
