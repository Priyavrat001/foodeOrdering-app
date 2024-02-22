import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search as LocalSearch} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;


type Props = {
    // onSubmit: (formData: SearchForm) => void;
    placeHolder: string;
    onReset?: () => void;
    searchQuery?: string;
  };

const Search = ({placeHolder, searchQuery}:Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });
  return (
    <Form {...form}>
      <form
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3 w-[50%] m-auto ${
          "border-red-500"
        }`}
      >
        <LocalSearch
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />
        <FormField
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeHolder}
                  className="border-none shadow-none text-xl focus-visible:ring-0"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="button"
          variant="outline"
          className="rounded-full"
        >
          Reset
        </Button>
        <Button type="submit" className="rounded-full bg-orange-500">
          Search
        </Button>
      </form>
    </Form>
  )
}

export default Search