import Swal from "sweetalert2";

export const deleteProducts = async ({ id, title }) => {
  Swal.fire({
    title,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "ok",
    denyButtonText: `Don't save`,
  }).then(({ isConfirmed }) => {
    if (isConfirmed) {
      fetch(api / id, {
        method: "DELETE",
        headers: {
          Authorization: `Baerer ${token}`,
          "content-type": "application/json",
        },
      });
    }
  });
};
