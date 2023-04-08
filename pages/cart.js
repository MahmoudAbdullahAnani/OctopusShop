import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { priceAll, textState } from "../Data/AtomLang";
import { useRecoilState } from "recoil";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import DeleteIcon from "@mui/icons-material/Delete";
import FormaterPrice from "../FormatNumber/numFormat";
import PeopleIcon from "@mui/icons-material/People";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { clareProduct, removeProduct } from "../rdx/Actions/prodectsCard";
import Swal from "sweetalert2";
function cart() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const disbatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const prodectsCard = useSelector((store) => store.ProdactsSlice);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [totilPrice, setTotilPrice] = useRecoilState(priceAll);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    prodectsCard.length <= 0 && router.push("/");
    prodectsCard.map((prodact) => {
      return setTotilPrice(totilPrice + prodact.price);
    });
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [atomLang, setAtomLang] = useRecoilState(textState);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [t, i18n] = useTranslation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // Functions Delete
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  const clearAll = () => {
    swalWithBootstrapButtons
      .fire({
        title: t("Are you sure?"),
        text: t("You won't be able to revert this!"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: t("Yes, delete it!  "),
        cancelButtonText: t("No, cancel! "),
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setTotilPrice(0);
          disbatch(clareProduct());
          swalWithBootstrapButtons.fire(
            t("Deleted!"),
            t("The product has been removed from the cart."),
            t("success")
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            t("Cancelled"),
            t("The product is still in the bag :)"),
            t("error")
          );
        }
      });
    
  };
  return (
    <>
      <div className={`container`}>
        <Table responsive className={`my-5`} striped bordered hover>
          <thead>
            <tr>
              <th>{t("Title")}</th>
              <th>{t("Price")}</th>
              <th>{t("Category")}</th>
              <th>{t("Image")}</th>
              <th>{t("Rating")}</th>
              <th>{t("Delete")}</th>
            </tr>
          </thead>
          <tbody>
            {prodectsCard.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{t(`${product.title}`)}</td>
                  <td>{FormaterPrice(product.price)}</td>
                  <td>{t(`${product.category}`)}</td>
                  <td>
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img
                      className={`w-10`}
                      src={product.image}
                      alt={t(`${product.title}`)}
                    />
                  </td>
                  <td>
                    {product.rating.rate}
                    <StarPurple500Icon className="text-yellow-400" /> ||{" "}
                    {product.rating.count}{" "}
                    <PeopleIcon className="text-blue-400" />
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => {
                        setTotilPrice(totilPrice - product.price);
                        disbatch(removeProduct(product.id));
                      }}
                    >
                      <DeleteIcon className={`text-red-500 w-16`} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>{t("Total")}</td>
              <td colSpan={4}>
                {prodectsCard.length >= 1 ? (
                  FormaterPrice(totilPrice)
                ) : (
                  <>
                    {FormaterPrice(0)}
                    <span className="ms-3 text-red-500">
                      {t("لا يوجد مشتريات")}
                    </span>
                  </>
                )}
              </td>
              <td className="text-center  hover:bg-red-200 bg-red-400">
                {prodectsCard.length >= 1 && (
                  <button className="w-100 " onClick={clearAll}>
                    <DeleteForeverTwoToneIcon
                      className={`text-red-600 w-100`}
                    />
                  </button>
                )}
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </>
  );
}

export default cart;
