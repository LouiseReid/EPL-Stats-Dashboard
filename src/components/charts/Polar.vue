<script>
import { PolarArea } from "vue-chartjs";

export default {
  extends: PolarArea,
  data() {
    return {
      chartData: {
        labels: ["red", "yellow", "green"],
        datasets: [
          {
            data: [40, 20, 10],
            backgroundColor: ["red", "yellow", "green"],
            borderColor: ["black", "red", "orange"],
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
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
