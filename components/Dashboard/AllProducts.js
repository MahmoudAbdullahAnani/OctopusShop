import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { textState } from "../../Data/AtomLang";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import UpdateIcon from "@mui/icons-material/Update";
import Swal from "sweetalert2";
function AllProducts() {
  const [atomLang, setAtomLang] = useRecoilState(textState);
  const [t, i18n] = useTranslation();
  const fetchData = () => {
    return axios.get("http://localhost:9000/products").then((res) => {
      return res.data;
    });
  };
  const [allData, setAllData] = useState([]);
  const { data, isLoading, isError, error, isFetched } = useQuery(
    "DataDashboard",
    fetchData
  );
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  useEffect(() => {
    setAllData(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  const delteProduct = (id) => {
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
            axios.delete(`http://localhost:9000/products/${id}`);
            const dataFilters = allData.filter(prodect => {
                return prodect.id !== id;
            })
            setAllData(dataFilters);
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
      <div className="container my-3">
          <h4 className="text-center py-2 rounded-lg bg-slate-300">{t("All Producs")}</h4>
      <Table className="border" responsive>
        <thead>
          <tr>
            <th>{t("#ID")}</th>
            <th>{t("Title")}</th>
            <th>{t("Description")}</th>
            <th>{t("category")}</th>
            <th>{t("Image")}</th>
            <th>{t("Price")}</th>
            <th>{t("Rating")}</th>
            <th>{t("Control")}</th>
          </tr>
        </thead>
        <tbody>
          {allData &&
            allData.map((prodact) => {
              return (
                <tr key={prodact.id}>
                  <td>{prodact.id}</td>
                  <td>
                    <input type="text"  value={t(prodact.title)} />
                  </td>
                  <td>
                    <input type="text" value={t(prodact.description)} />
                  </td>
                  <td>
                    <input type="text" value={t(prodact.category)} />
                  </td>
                  <td>
                    <input type="url" value={t(prodact.image)} />
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img
                      className="w-12"
                      src={prodact.image}
                      alt={t(prodact.title)}
                    />
                  </td>
                  <td>
                    <input type="number" value={t(prodact.price)} />
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-2">
                      <input type="number" value={t(prodact.rating.rate)} />
                      <input type="number" value={t(prodact.rating.count)} />
                    </div>
                  </td>
                  <td>
                    <div>
                      <button
                        onClick={() => delteProduct(prodact.id)}
                        className="mb-2 rounded-sm text-white  px-2 py-1 bg-red-500"
                      >
                        <DeleteSweepIcon />{" "}
                      </button>
                      <button className="px-2 rounded-sm text-white  py-1 bg-blue-500">
                        {t("Update")}
                        <UpdateIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <th>{t("#ID")}</th>
            <th>{t("Title")}</th>
            <th>{t("Description")}</th>
            <th>{t("Category")}</th>
            <th>{t("Image")}</th>
            <th>{t("Price")}</th>
            <th>{t("Rating")}</th>
            <th>{t("Control")}</th>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default AllProducts;
