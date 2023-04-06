import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { trans } from "../pages/_app";
import { useRecoilState } from "recoil";
import { getProducts, scurityCard, textState, userSign } from "../Data/AtomLang";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { clareProduct } from "../rdx/Actions/prodectsCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scurCard, setScurityCard] = useRecoilState(scurityCard);
  const prodectsCard = useSelector((store) => store.ProdactsSlice);
  const dispatch = useDispatch();
    const router = useRouter();
  // handleShow fn
  const handleShow = () => {
    Swal.fire({
      title: t("Are you sure?"),
      text: t("You won't be able to revert this!"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("Yes, Log Out!"),
      cancelButtonText: t("Cancel"),
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("name");
        localStorage.removeItem("signin");
        setItemSignIn("");
        dispatch(clareProduct());
        setScurityCard(false);
        router.push("/")
      }
    });
  };
const [allCountProduct,setAllCountProduct] = useState(0)
//   const calcAllCart = () => {
//      prodectsCard.map((pro) => {
//        setAllCountProduct(pro.cartQuantity + allCountProduct);
//     });
//     console.log(allCountProduct);
// }
  const [userSignIn, setUserSign] = useRecoilState(userSign);
  const [itemSignIn, setItemSignIn] = useState("");
  // Function Trans
  // Get RecoilState
  const [atomLang, setAtomLang] = useRecoilState(textState);
  const [t, i18n] = useTranslation();
  const navigation = {
    categories: [
      {
        id: "women",
        name: t("women"),
        featured: [
          {
            name: t("New Arrivals"),
            href: "#",
          },
        ],
        sections: [
          {
            id: "clothing",
            name: t("Clothing"),
            items: [
              { name: t("Tops"), href: "#" },
              { name: t("Dresses"), href: "#" },
              { name: t("Pants"), href: "#" },
              { name: t("Denim"), href: "#" },
              { name: t("Sweaters"), href: "#" },
              { name: t("T-Shirts"), href: "#" },
              { name: t("Jackets"), href: "#" },
            ],
          },
          {
            id: "accessories",
            name: t("Accessories"),
            items: [
              { name: t("Watches"), href: "#" },
              { name: t("Wallets"), href: "#" },
              { name: t("Sunglasses"), href: "#" },
              { name: t("Hats"), href: "#" },
              { name: t("Belts"), href: "#" },
            ],
          },
          {
            id: "brands",
            name: t("Brands"),
            items: [
              { name: t("Giorgio Armani"), href: "#" },
              { name: t("Ralph Lauren"), href: "#" },
              { name: t("Gucci"), href: "#" },
              { name: t("Dolce & Gabbana"), href: "#" },
              { name: t("barbaric"), href: "#" },
              { name: t("Oscar de la Renta"), href: "#" },
              { name: t("Salvatore Ferragamo"), href: "#" },
              { name: t("Tom Ford"), href: "#" },
            ],
          },
        ],
      },
      {
        id: "men",
        name: t("men"),
        featured: [
          {
            name: t("New Arrivals"),
            href: "#",
          },
        ],
        sections: [
          {
            id: "clothing",
            name: t("Clothing"),
            items: [
              { name: t("Tops"), href: "#" },
              { name: t("Dresses"), href: "#" },
              { name: t("Pants"), href: "#" },
              { name: t("Denim"), href: "#" },
              { name: t("Sweaters"), href: "#" },
              { name: t("T-Shirts"), href: "#" },
              { name: t("Jackets"), href: "#" },
            ],
          },
          {
            id: "accessories",
            name: t("Accessories"),
            items: [
              { name: t("Watches"), href: "#" },
              { name: t("Wallets"), href: "#" },
              { name: t("Sunglasses"), href: "#" },
              { name: t("Hats"), href: "#" },
              { name: t("Belts"), href: "#" },
            ],
          },
          {
            id: "brands",
            name: t("Brands"),
            items: [
              { name: t("Giorgio Armani"), href: "#" },
              { name: t("Ralph Lauren"), href: "#" },
              { name: t("Gucci"), href: "#" },
              { name: t("Dolce & Gabbana"), href: "#" },
              { name: t("barbaric"), href: "#" },
              { name: t("Oscar de la Renta"), href: "#" },
              { name: t("Salvatore Ferragamo"), href: "#" },
              { name: t("Tom Ford"), href: "#" },
            ],
          },
        ],
      },
    ],
    Home: [{ name: t("Home"), href: "/" }],
    pages: [{ name: t("Company"), href: "#" }],
  };
  const [open, setOpen] = useState(false);
  const [prodacts] = useRecoilState(getProducts);
  useEffect(() => {
    const item = localStorage.getItem(`name`);
    setItemSignIn(item);  
  }, [router.asPath, itemSignIn]);
  return (
    <div
      className={`bg-dark drop-shadow-lg sticky-top z-10 ${
        prodacts ? "d-none" : null
      } `}
    >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2 mt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Link
                      className="text-decoration-none px-3 buttonHome"
                      href={`/`}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {t("Home")}
                    </Link>
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-indigo-600 border-indigo-600"
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pt-10 pb-8"
                      >
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm text-start"
                          >
                            <Link
                              href={item.href}
                              className={`mt-6 block font-medium text-gray-900 ${
                                atomLang && "text-end"
                              }`}
                            >
                              <span
                                className="absolute inset-0 z-10"
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                            <p
                              aria-hidden="true"
                              className={`mt-1 ${atomLang && "text-end"}`}
                            >
                              {t("Shop now")}
                            </p>
                          </div>
                        ))}
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile `}
                              className="font-medium text-gray-900 text-center"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6 justify-self-center"
                            >
                              {section.items.map((item) => (
                                <li
                                  key={item.name}
                                  className="flow-root justify-content-center"
                                >
                                  <Link
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        className="-m-2 block p-2  font-medium text-gray-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                  <div className="d-flex align-items-center justify-self-center">
                    <div className="dropdown togelStores">
                      <button
                        className=" dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {t("Stores")}
                      </button>
                      <ul
                        className="dropdown-menu text-center"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link className="dropdown-item" href="#">
                            {t("Clothes")}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            {t("Shoes")}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            {t("Hours")}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            {t("Computers")}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            {t("Electrical equipment")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    {itemSignIn ? (
                      <div className="flex">
                        <AccountCircleIcon className={`text-blue-400`} />
                        <h6 className={`m-0 pb-1 ps-1`}>{itemSignIn}</h6>
                      </div>
                    ) : (
                      <Link
                        href="/signin"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {t("Sign in")}
                      </Link>
                    )}
                  </div>
                  <div className="flow-root">
                    {itemSignIn ? (
                      <button
                        onClick={handleShow}
                        className="btn bg-danger  text-sm font-medium hover:text-gray-800 text-white "
                      >
                        {t("Log out")}
                      </button>
                    ) : (
                      <Link
                        href="/signup"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create account
                      </Link>
                    )}
                  </div>
                </div>

                <div className="bg-dark w-100 border-t border-gray-200 py-6 px-4">
                  <button className="mx-auto  ml-3 block text-base font-medium text-gray-900">
                    test
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo 
              <div className="ml-4 flex lg:ml-0">
                <Link href="">
                  <span className="sr-only">Your Company</span>
                </Link>
              </div>
              */}

              {/* Flyout menus */}
              <div
                className={`d-flex w-100 ${
                  atomLang ? "flex-row-reverse" : ""
                } hhh`}
              >
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div
                    className={`flex h-full space-x-8 ${
                      atomLang ? "flex-row-reverse" : ""
                    }`}
                  >
                    {navigation.Home.map((page) => (
                      <div
                        key={page.name}
                        className="d-flex justify-center px-3 align-items-center "
                      >
                        <Link
                          href={page.href}
                          className="-m-2 block p-2  font-medium text-gray-900 text-decoration-none hover:text-black"
                        >
                          {page.name}
                        </Link>
                      </div>
                    ))}
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-700 hover:text-gray-800",
                                  "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow"
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white">
                                  <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                      <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative text-base sm:text-sm"
                                          >
                                            <Link
                                              href={item.href}
                                              className="mt-6 block font-medium text-gray-900"
                                            >
                                              <span
                                                className="absolute inset-0 z-10"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </Link>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1"
                                            >
                                              {t("Shop now")}
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className={`font-medium text-gray-900 ${
                                                atomLang ? "text-center" : ""
                                              }`}
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 "
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex justify-content"
                                                >
                                                  <Link
                                                    href={item.href}
                                                    className="hover:text-gray-800"
                                                  >
                                                    {item.name}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-decoration-none text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </Link>
                    ))}
                    <div className="d-flex align-items-center justify-self-center">
                      <div className="dropdown togelStores">
                        <button
                          className=" dropdown-toggle"
                          type="button"
                          // id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {t("Stores")}
                        </button>
                        <ul
                          className="dropdown-menu text-center"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link className="dropdown-item" href="#">
                              {t("Clothes")}
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              {t("Shoes")}
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              {t("Hours")}
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              {t("Computers")}
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              {t("Electrical equipment")}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Popover.Group>
                <div
                  className={`${
                    atomLang ? "me-auto" : "ms-auto"
                  } flex items-center`}
                >
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {itemSignIn ? (
                      <>
                        <AccountCircleIcon className={`text-blue-400`} />
                        <h6 className={`m-0 pb-1 ps-1`}>{itemSignIn}</h6>
                      </>
                    ) : (
                      <Link
                        href="/signin"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {t("Sign in")}
                      </Link>
                    )}
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    {itemSignIn ? (
                      <button
                        onClick={handleShow}
                        className="btn bg-danger  text-sm font-medium hover:text-gray-800 text-white "
                      >
                        {t("Log out")}
                      </button>
                    ) : (
                      <Link
                        href="/signup"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create account
                      </Link>
                    )}
                  </div>

                  <div className="d-flex lg:ml-8 lg:flex min-h-min items-center flex-nowrap">
                    <span className="text-sky-400/100 min-h-min">EN</span>
                    <Switch
                      checked={atomLang}
                      onClick={() => {
                        atomLang ? setAtomLang(false) : setAtomLang(true);
                        atomLang
                          ? i18n.changeLanguage("en")
                          : i18n.changeLanguage("ar");
                      }}
                      className="chek"
                    />
                    <span className="text-sky-400/100 min-h-min">AR</span>
                  </div>

                  {/* Search 
                <div className="flex lg:ml-6">
                  <Link href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                */}

                  {/* Cart */}
                  {itemSignIn && (
                    <div className="ml-4 flow-root lg:ml-6">
                      <Link
                        href="#"
                        className="group -m-2 flex items-center p-2"
                      >
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          {prodectsCard.length}
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
