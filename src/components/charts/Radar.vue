<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: ['data'],
  data() {
    return {
      chartData: {
        labels: [
          "tackles",
          "tackle success %",
          "interceptions",
          "clearances",
          "recoveries",
          "successful 50/50's"
        ],
        datasets: [
          {
            data: this.data,
            backgroundColor: "#feff0075",
            borderColor: "#f49b42",
            borderWidth: 1,
            pointBackgroundColor: "#f49b42",
            pointHoverBackgroundColor: "#1d0138"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scale: {
          ticks: {
            display: false,
            maxTicksLimit: 3
          },
          pointLabels: {
              fontColor: '#1d0138',
              fontSize: 12
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
