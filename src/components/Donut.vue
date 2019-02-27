<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props:['won', 'lost'],
  data() {
    return {
      chartData: {
        labels: ["Won", "Lost"],
        datasets: [
          {
            data: [this.won, this.lost],
            backgroundColor: ["#7fc35f","#ca3838"],
            borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        cutoutPercentage: 50,
        responsive: true,
        legend: {
            labels: {
                boxWidth: 10
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

<style scoped>
</style>