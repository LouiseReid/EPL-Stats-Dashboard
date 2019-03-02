<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["dataLabels", "dataValues"],
  data() {
    return {
      chartData: {
        labels: this.dataLabels,
        datasets: [
          {
            data: this.dataValues,
            backgroundColor: "#f87979"
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              stacked: false,
              beginAtZero: true,
              ticks: {
                stepSize: 1,
                min: 0,
                autoSkip: false,
                fontColor: "#1d0138",
                fontSize: 12
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#1d0138",
                fontSize: 12
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
