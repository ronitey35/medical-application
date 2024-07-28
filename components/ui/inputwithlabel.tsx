import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type InputWithLabel = 
{
    label?:string,
    type?: string,
    placeholder?:string,
    id?:string,
}

export function InputWithLabel({label,type,placeholder,id}: InputWithLabel) {
  return (
    <div className="grid  max-w-sm w-full items-center gap-1.5">
      <Label className="pl-2" htmlFor={type}>{label}</Label>
      <Input  type={type} id={type} placeholder={placeholder} />
    </div>
  )
}
