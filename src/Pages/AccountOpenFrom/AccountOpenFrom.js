import {
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Select,
  Stack
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "react-phone-input-2/lib/style.css";
import { AuthContext } from "../../context/AuthProvider";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
const AccountOpenFrom = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const date = new Date();
  const { user } = useContext(AuthContext);
  const imgHostKey = process.env.REACT_APP_IMAGE_SECRET_KEY;
  // console.log(imgHostKey);
  const [name, setName] = useState("Account Open In Bank");
  const [gender, setGender] = useState("male");
  const accountFromSubmit = (data) => {
    console.log(data);
    const cardImg = data.cardImg[0];
    console.log(cardImg);
    const formData = new FormData();
    formData.append("image", cardImg);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const image = imgData.data.url;
          console.log(image);
          const account = {
            accountOpenDate: date,
            firstName: data.firstName,
            lastName: data.lastName,
            birth: data.birth,
            gender: gender,
            phone: data.phone,
            email: data.email,
            streetAddress: data.streetAddress,
            city: data.city,
            region: data.region,
            postal: data.postal,
            country: data.country,
            identification: data.identification,
            idNumber: data.idNumber,
            cardImg: imgData.data.url,
            accountType: data.accountType,
            accountCategory: data.accountCategory,
            monthlySalary: data.monthlySalary,
            initialDeposit: data.initialDeposit,
            term: true,
            approve: false,
          };
          console.log(account);
          // save information to the database
          fetch("http://localhost:5000/bankAccounts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(account),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(
                `Your form has been submitted please wait for approval.`
              );
              reset();
            });
        }
      });
  };

  return (
    <div className="bg-[#ddd]">
      <div className="">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
      <div className="account-open-from py-20 bg-[#F3F3FE]">
        <div className="container">
          <div className="from-area mx-auto px-[38px] py-[50px] z-10 w-full max-w-[800px] rounded-lg  bg-white">
            <h2 className="text-[26px] font-semibold md:text-[32px] text-[#2c3345] text-center mb-0 pb-[40px] ">
              Account Opening Form
            </h2>
            <h2 className="text-xl font-semibold text-[#2c3345]  mb-3 ">
              Personal Information
            </h2>
            <form onSubmit={handleSubmit(accountFromSubmit)}>
              <div className="from-group md:flex justify-between ">
                <div className="form-control h-auto w-full items-center md:mr-4">
                  <label className="text-base text-[#57647E]">First Name</label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="First Name"
                  ></input>
                </div>
                <div className="form-control w-full ">
                  <label className="text-base text-[#57647E]">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Last Name"
                  ></input>
                </div>
              </div>
              <div className="from-group md:flex justify-between items-center ">
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    {...register("birth", {
                      required: "Birth is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Date of Birth"
                  ></input>
                </div>
                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">Gender</label>
                  <RadioGroup onChange={setGender} value={gender}>
                    <Stack
                      direction="row"
                      // {...register("gender", {
                      //   required: "gender is required",
                      // })}
                      className="h-[50px] mb-2 mt-1 w-full"
                    >
                      <Radio value="Male">Male</Radio>
                      <Radio value="Female">Female</Radio>
                      <Radio value="Others">Others</Radio>
                    </Stack>
                  </RadioGroup>
                  {/* <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="female"
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    {...register("gender", {
                      required: "gender is required",
                    })}
                  >
                    <Box sx={{ display: "flex" }}>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />

                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                    </Box> 
                  </RadioGroup> */}
                  {/* <Select
                    style={{ width: "100%", background: "#fff" }}
                    id="demo-simple-select"
                    fullWidth
                    defaultValue="Male"
                    className="from-select border  px-[10px] rounded "
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select> */}
                  {/* {errors.gender && (
                    <p className="text-red-600">{errors.gender?.message}</p>
                  )} */}
                </div>
              </div>

              <div className="from-group md:flex justify-between items-center ">
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    {...register("phone", {
                      required: "Phone Number is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Phone Number"
                  ></input>
                </div>
                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "email is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Email Address"
                  ></input>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-[#2c3345] my-3 ">
                Mailing Address
              </h2>
              <div className="from-group md:flex justify-between items-center ">
                <div className="form-control  w-full ">
                  <label className="text-base text-[#57647E]">
                    Street Address
                  </label>
                  <input
                    type="text"
                    {...register("streetAddress", {
                      required: "Street Address is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Street Address"
                  ></input>
                </div>
              </div>
              <div className="from-group md:flex justify-between items-center ">
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">City</label>
                  <input
                    type="text"
                    {...register("city", {
                      required: "City is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="City"
                  ></input>
                </div>
                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">Region</label>
                  <input
                    type="text"
                    {...register("region", {
                      required: "Region is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Region"
                  ></input>
                </div>
              </div>
              <div className="from-group md:flex justify-between items-center ">
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">
                    Postal / Zip Code
                  </label>
                  <input
                    type="text"
                    {...register("postal", {
                      required: "Postal / Zip Code",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="City"
                  ></input>
                </div>
                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">Country</label>
                  <input
                    type="text"
                    {...register("country", {
                      required: "Country is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Country"
                  ></input>
                </div>
              </div>
              <div className="from-group md:flex justify-between items-center ">
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">
                    Form of Identification
                  </label>
                  <Select
                    style={{
                      margin: "5px 0 10px",
                      width: "100%",
                      height: "50px",
                    }}
                    placeholder="Form of Identification"
                    className="from-select border  px-[10px] rounded "
                    {...register("identification", {
                      required: "identification is required",
                    })}
                  >
                    <option value="StudentID">Student ID</option>
                    <option value="NationalID">National ID</option>
                  </Select>
                  {/* <Select
                    style={{ width: "100%", background: "#fff" }}
                    id="demo-simple-select"
                    fullWidth
                    defaultValue="Student ID"
                    className="from-select border  px-[10px] rounded "
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    {...register("identification", {
                      required: "identification is required",
                    })}
                  >
                    <MenuItem value="Student ID">Student ID</MenuItem>
                    <MenuItem value="National ID">National ID</MenuItem>
                  </Select> */}
                </div>
                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">ID Number</label>
                  <input
                    type="number"
                    {...register("idNumber", {
                      required: "Id Number is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Id Number"
                  ></input>
                </div>
              </div>
              <div className="from-group md:flex justify-between items-center ">
                <div className="form-control cardImg-control w-full">
                  <label id="cardId" className=" text-base text-[#57647E]">
                    ID Card Upload
                  </label>
                  <input
                    type="file"
                    {...register("cardImg", {
                      required: "Photo is required",
                    })}
                    htmlFor="cardId"
                    className="border none cardImg-field mb-2 mt-1 rounded w-full px-[10px]"
                  />
                  {errors.cardImg && (
                    <p className="text-red-600">{errors.cardImg?.message}</p>
                  )}
                </div>
              </div>
              <h2 className="text-xl text-[#2c3345] font-semibold my-3 ">
                Account Information
              </h2>
              <div className="from-group md:flex justify-between items-center ">
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">
                    Account Type
                  </label>
                  <Select
                    style={{
                      margin: "5px 0 10px",
                      width: "100%",
                      height: "50px",
                    }}
                    placeholder="Account Type"
                    className="from-select border  px-[10px] rounded "
                    {...register("accountType", {
                      required: "accountType is required",
                    })}
                  >
                    <option value="Savings">Current</option>
                    <option value="Savings">Savings</option>
                    <option value="Others">Others</option>
                  </Select>
                  {/* <Select
                    style={{ width: "100%", background: "#fff" }}
                    id="demo-simple-select"
                    defaultValue="Current"
                    fullWidth
                    className="from-select border  px-[10px] rounded "
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    {...register("accountType", {
                      required: "accountType is required",
                    })}
                  >
                    <MenuItem value="Current">Current</MenuItem>
                    <MenuItem value="Savings">Savings</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select> */}
                </div>
                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">
                    Account Category
                  </label>
                  <Select
                    style={{
                      margin: "5px 0 10px",
                      width: "100%",
                      height: "50px",
                    }}
                    placeholder="Account Category"
                    className="from-select border  px-[10px] rounded "
                    {...register("accountCategory", {
                      required: "account Category is required",
                    })}
                  >
                    <option value="Singly">Singly</option>
                    <option value="Jointly">Jointly</option>
                    <option value="Others">Others</option>
                  </Select>
                  {/* <Select
                    style={{ width: "100%", background: "#fff" }}
                    id="demo-simple-select"
                    name="accountCategory"
                    defaultValue="Singly"
                    fullWidth
                    className="from-select border text-[#57647E]  px-[10px] rounded "
                    sx={{ margin: "5px 0 10px", width: "100%" }}
                    {...register("accountCategory", {
                      required: "account Category is required",
                    })}
                  >
                    <MenuItem value="Singly">Singly</MenuItem>
                    <MenuItem value="Jointly">Jointly</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select> */}
                </div>
              </div>
              <div className="from-group md:flex justify-between items-center ">
                <div className="form-control  w-full  md:mr-4">
                  <label className="text-base text-[#57647E]">
                    Monthly Salary
                  </label>
                  <InputGroup className="mb-2 mt-1">
                    <InputLeftElement
                      className="h-[50px]"
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children="$"
                    />
                    <Input
                      type="number"
                      {...register("monthlySalary", {
                        required: "Monthly Salary",
                      })}
                      placeholder="Initial Deposit"
                    />
                  </InputGroup>
                  {/* <input
                    type="number"
                    {...register("monthlySalary", {
                      required: "Monthly Salary",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Monthly Salary"
                  ></input> */}
                  {errors.monthlySalary && (
                    <p className="text-red-600">
                      {errors.monthlySalary?.message}
                    </p>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="text-base text-[#57647E]">
                    Initial Deposit
                  </label>
                  <InputGroup className="mb-2 mt-1">
                    <InputLeftElement
                      className="h-[50px] "
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children="$"
                    />
                    <Input
                      type="number"
                      {...register("initialDeposit", {
                        required: "Initial Deposit is required",
                      })}
                      placeholder="Initial Deposit"
                    />
                  </InputGroup>
                  {/* <input
                    type="number"
                    {...register("initialDeposit", {
                      required: "Initial Deposit is required",
                    })}
                    className="border mb-2 mt-1 rounded w-full px-[10px]"
                    placeholder="Initial Deposit"
                  ></input> */}
                  {errors.initialDeposit && (
                    <p className="text-red-600">
                      {errors.initialDeposit?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="from-group my-4 ">
                <div className="form-control flex items-center w-full">
                  <input
                    className="mr-3"
                    type="checkbox"
                    name="term"
                    id="terms"
                    required
                    // onClick={(e) => setTerms(e.target.value)}
                    {...register("term", {
                      required: "Term and every field are required",
                    })}
                  />
                  <label htmlFor="terms">I agree to terms and conditions</label>
                </div>
                {errors.term && (
                  <p className="text-red-600 ml-[32px]">
                    {errors.term?.message}
                  </p>
                )}
              </div>
              <div className="w-[49%] my-4">
                <input
                  className="btn border-none primary-btn text-black w-full"
                  value="Submit Form"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOpenFrom;
