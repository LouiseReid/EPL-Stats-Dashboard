<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["dataLabels", "wonDataValues", "lostDataValues"],
  data() {
    return {
      chartData: {
        labels: this.dataLabels,
        datasets: [
          {
            label: "won",
            data: this.wonDataValues,
            backgroundColor: "#63bc4d"
          },
          {
            label: "lost",
            data: this.lostDataValues,
            backgroundColor: "#b65254"
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
                fontSize: 10
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#1d0138",
                fontSize: 12,
                min: 0
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
