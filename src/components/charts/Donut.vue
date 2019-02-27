<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["won", "lost"],
  data() {
    return {
      chartData: {
        labels: ["Won", "Lost"],
        datasets: [
          {
            data: [this.won, this.lost],
            backgroundColor: ["#608830", "#a02727"],
            borderColor: ["#88bd49", "#ea4949"],
            borderWidth: 1
          }
        ]
      },
      options: {
        cutoutPercentage: 50,
        responsive: true,
        legend: {
          labels: {
            boxWidth: 10,
            fontColor: 'black'
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
