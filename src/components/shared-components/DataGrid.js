import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { makeStyles, withStyles } from "@mui/styles";
import { DataGridStyles } from "../../styles/DataGridStyles";
import { _2s } from "../../utilities/helper";
import { DataGrid } from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useSelector } from "react-redux";

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

const Details = ({ handleSelectedRecord }) => {
  const classes = useStyles();
  const allJobs = useSelector(({ job }) => job.allJobs);

  const getColumns = () => {
    const { ...columns } = allJobs[0];
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
          renderCell: (params) => {
            return (
              <>
                {col === "actions" && (
                  <HtmlTooltip title="View Record" placement="top" arrow>
                    <RemoveRedEyeOutlinedIcon className="cursor-pointer" />
                  </HtmlTooltip>
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

  return (
    <div>
      <Card className="w-full rounded-20 shadow">
        <div style={{ height: "400px", width: "100%" }}>
          <DataGrid
            className={classes.root}
            pagination
            paginationMode="server"
            rowHeight={80}
            rows={allJobs}
            columns={getColumns()}
            onRowClick={(params, event) => {
              if (!event.ignore) handleSelectedRecord(params?.row);
            }}
            rowCount={allJobs?.length}
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
