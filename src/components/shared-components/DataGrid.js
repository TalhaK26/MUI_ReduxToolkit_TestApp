import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import NavBar from "../shared-components/Navbar";
import Footer from "../shared-components/Footer";
import Form from "../shared-components/Form";
import { makeStyles, withStyles } from "@mui/styles";
import { DataGridStyles } from "../../styles/DataGridStyles";
import { _2s } from "../../utilities/helper";
import { DataGrid } from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const dummyData = [
  {
    id: 111,
    title: "Mobile Developer",
    description: "4 years of experience.",
    employmentType: "Full Time",
  },
  {
    id: 112,
    title: "Full Stack Developer",
    description: "5 years of experience.",
    employmentType: "Part Time",
  },
];

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    padding: 10,
    fontSize: 12,
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const useStyles = makeStyles(DataGridStyles);

const Details = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  // const usageDataList = useSelector(({ plan }) => plan.planUsageList);

  // useEffect(() => {
  // 	if (usageDataList) setLoading(false);
  // 	if (!usageDataList) getUsageDataList();
  // }, [usageDataList]);

  const getColumns = () => {
    const { ...columns } = dummyData[0];
    columns["actions"] = "";

    return Object.keys(columns)
      .filter((c) => c !== "id")
      .map((col, index) => {
        return {
          index,
          field: col,
          headerName: _2s(col),
          width: 150,
          editable: true,
          resizable: true,
          renderCell: (params) => {
            return (
              <>
                {col === "actions" && (
                  <RemoveRedEyeOutlinedIcon className="cursor-pointer" />
                )}

                {col !== "actions" && (
                  <HtmlTooltip title={params.value} placement="top" arrow>
                    <div className="d-flex justify-content-between align-items-center">
                      {params.value}
                    </div>
                  </HtmlTooltip>
                )}
              </>
            );
          },
        };
      });
  };

  // const getUsageDataList = async () => {
  //   const res = await getPlanUsage();
  //   await dispatch(setPlanUsageData(res.data));
  //   setLoading(false);
  // };

  return (
    <div>
      <Card className="w-full rounded-20 shadow">
        <div style={{ height: "400px", width: "100%" }}>
          <DataGrid
            className={classes.root}
            pagination
            paginationMode="server"
            rowHeight={80}
            rows={dummyData}
            columns={getColumns()}
            onRowClick={(params, event) => {
              if (!event.ignore) {
                alert("asd");
              }
            }}
            rowCount={dummyData?.length}
            rowsPerPageOptions={[10, 30, 50, 100]}
            disableSelectionOnClick
            checkboxSelection
          />
        </div>
      </Card>
    </div>
  );
};

export default Details;
