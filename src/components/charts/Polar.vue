<script>
import { PolarArea } from "vue-chartjs";

export default {
  extends: PolarArea,
  props: ["dataLabels", "dataValues"],
  data() {
    return {
      chartData: {
        labels: this.dataLabels,
        datasets: [
          {
            data: this.dataValues,
            backgroundColor: [
              "#6ee598",
              "#008bc6",
              "#ff9310",
              "#008080",
              "#022b3a"
            ],
            borderColor: ["#b3f7cb", "#6cb5d4", "#f9ba6e", "#04bfbf", "#00445a"],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scale: {
          ticks: {
            display: false,
            maxTicksLimit: 5
          }
        },
        legend: {
          display: false
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
