
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Select value={i18n.language} onValueChange={i18n.changeLanguage}>
      <SelectTrigger className="w-[110px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="pt-BR">Português</SelectItem>
        <SelectItem value="es">Espanhol</SelectItem>
      </SelectContent>
    </Select>
  );
}
