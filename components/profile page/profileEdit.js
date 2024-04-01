"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Lottie from "lottie-react";
import setting from "../../animation/setting.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema } from "@/lib/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { updateProfile } from "@/services/user.service";
import { toast } from "../ui/use-toast";
import { updateDetail } from "@/redux/slices/userSlice";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const dispatch = useDispatch();
  const {push} = useRouter();
  const { name, number, email } = useSelector((state) => state.account);
  const [isClient, setisClient] = useState(false);
  const updateForm = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });
  useEffect(() => {
    setisClient(true);
    updateForm.setValue("phoneNumber", number);
    updateForm.setValue("name", name);
  }, []);
  async function onSubmitUpdateDetails(values) {
    try {
      await updateProfile({
        phoneNumber: values.phoneNumber,
        name: values.name,
      });
      dispatch(
        updateDetail({
          number: values?.phoneNumber,
          name: values.name,
        })
      );
      push("/profile")
      toast({
        title: "Updated Successfully",
      });
    } catch (error) {
      console.log(error.message);
      toast({
        variant: "destructive",
        title: "Failed",
        description: error.response?.data?.message || "Something went wrong",
      });
    }
  }
  return (
    <div className="  flex   items-center justify-center gap-20">
      <Form {...updateForm}>
        <form
          onSubmit={updateForm.handleSubmit(onSubmitUpdateDetails)}
          className="customer-border bg-primary p-20 px-24"
        >
          <div className="my-3 text-neutral-200">
            <h2 className="secondary-title">Edit Profile</h2>
            <p className="paragraph">Update your profile information.</p>
          </div>
          <div className="space-y-4 my-3">
            <div className="space-y-2 ">
              <FormField
                control={updateForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-200">
                      Your Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={updateForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-200">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="phoneNumber" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
         
          </div>
          <div>
            <Button
              type="submit"
              className="btn border-white border-2 text-white px-5 py-2 w-full"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
      <div className="hidden md:block">
        <Lottie animationData={setting} loop={true} />;
      </div>
    </div>
  );
}
