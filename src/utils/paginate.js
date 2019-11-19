import _ from "lodash";

function paginate(itens, pageItem, currentPage) {
  const indexPage = (currentPage - 1) * pageItem;

  return _(itens)
    .slice(indexPage)
    .take(pageItem)
    .value();
}

export default paginate;
