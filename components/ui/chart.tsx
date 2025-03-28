"use client"

import type * as React from "react"
import {
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  Bar,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  Pie,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

interface ChartProps {
  data: any[]
  categories: string[]
  index: string
  colors?: string[]
  valueFormatter?: (value: number) => string
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  yAxisWidth?: number
  showGridLines?: boolean
  showLegend?: boolean
  showAnimation?: boolean
  showTooltip?: boolean
  className?: string
  children?: React.ReactNode
}

export function LineChart({
  data,
  categories,
  index,
  colors = ["#0ea5e9", "#f43f5e", "#8b5cf6", "#22c55e"],
  valueFormatter = (value: number) => value.toString(),
  startEndOnly = false,
  showXAxis = true,
  showYAxis = true,
  yAxisWidth = 56,
  showGridLines = true,
  showLegend = true,
  showAnimation = true,
  showTooltip = true,
  className,
  children,
}: ChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 16,
            left: 16,
          }}
        >
          {showGridLines && <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />}
          {showXAxis && (
            <XAxis
              dataKey={index}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                if (startEndOnly) {
                  const isFirst = data.findIndex((item) => item[index] === value) === 0
                  const isLast = data.findIndex((item) => item[index] === value) === data.length - 1
                  return isFirst || isLast ? value : ""
                }
                return value
              }}
              fontSize={12}
              interval="preserveStartEnd"
            />
          )}
          {showYAxis && (
            <YAxis
              width={yAxisWidth}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => valueFormatter(value)}
              fontSize={12}
            />
          )}
          {showTooltip && (
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            {payload[0]?.payload[index]}
                          </span>
                        </div>
                        {categories.map((category, i) => (
                          <div key={category} className="flex flex-col text-right">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">{category}</span>
                            <span className="font-bold text-muted-foreground">
                              {valueFormatter(payload[i]?.value as number)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
          )}
          {showLegend && (
            <Legend
              content={({ payload }) => {
                if (payload && payload.length) {
                  return (
                    <div className="flex justify-center gap-4">
                      {payload.map((entry, index) => (
                        <div key={`item-${index}`} className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                          <span className="text-xs text-muted-foreground">{entry.value}</span>
                        </div>
                      ))}
                    </div>
                  )
                }
                return null
              }}
            />
          )}
          {categories.map((category, i) => (
            <Line
              key={category}
              type="monotone"
              dataKey={category}
              stroke={colors[i % colors.length]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, style: { fill: colors[i % colors.length] } }}
              isAnimationActive={showAnimation}
            />
          ))}
          {children}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BarChart({
  data,
  categories,
  index,
  colors = ["#0ea5e9", "#f43f5e", "#8b5cf6", "#22c55e"],
  valueFormatter = (value: number) => value.toString(),
  startEndOnly = false,
  showXAxis = true,
  showYAxis = true,
  yAxisWidth = 56,
  showGridLines = true,
  showLegend = true,
  showAnimation = true,
  showTooltip = true,
  className,
  children,
}: ChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 16,
            left: 16,
          }}
        >
          {showGridLines && <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />}
          {showXAxis && (
            <XAxis
              dataKey={index}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                if (startEndOnly) {
                  const isFirst = data.findIndex((item) => item[index] === value) === 0
                  const isLast = data.findIndex((item) => item[index] === value) === data.length - 1
                  return isFirst || isLast ? value : ""
                }
                return value
              }}
              fontSize={12}
              interval="preserveStartEnd"
            />
          )}
          {showYAxis && (
            <YAxis
              width={yAxisWidth}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => valueFormatter(value)}
              fontSize={12}
            />
          )}
          {showTooltip && (
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            {payload[0]?.payload[index]}
                          </span>
                        </div>
                        {categories.map((category, i) => (
                          <div key={category} className="flex flex-col text-right">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">{category}</span>
                            <span className="font-bold text-muted-foreground">
                              {valueFormatter(payload[i]?.value as number)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
          )}
          {showLegend && (
            <Legend
              content={({ payload }) => {
                if (payload && payload.length) {
                  return (
                    <div className="flex justify-center gap-4">
                      {payload.map((entry, index) => (
                        <div key={`item-${index}`} className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                          <span className="text-xs text-muted-foreground">{entry.value}</span>
                        </div>
                      ))}
                    </div>
                  )
                }
                return null
              }}
            />
          )}
          {categories.map((category, i) => (
            <Bar
              key={category}
              dataKey={category}
              fill={colors[i % colors.length]}
              radius={[4, 4, 0, 0]}
              isAnimationActive={showAnimation}
            />
          ))}
          {children}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function PieChart({
  data,
  category,
  index,
  colors = ["#0ea5e9", "#f43f5e", "#8b5cf6", "#22c55e", "#eab308", "#ec4899", "#f97316", "#14b8a6"],
  valueFormatter = (value: number) => value.toString(),
  showAnimation = true,
  showTooltip = true,
  className,
  children,
}: Omit<ChartProps, "categories"> & { category: string }) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          {showTooltip && (
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0]?.payload
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">{data[index]}</span>
                        <span className="font-bold text-muted-foreground">{valueFormatter(data[category])}</span>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
          )}
          <Pie
            data={data}
            dataKey={category}
            nameKey={index}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            innerRadius="40%"
            paddingAngle={2}
            isAnimationActive={showAnimation}
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Legend
            content={({ payload }) => {
              if (payload && payload.length) {
                return (
                  <div className="flex flex-wrap justify-center gap-4">
                    {payload.map((entry, index) => (
                      <div key={`item-${index}`} className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-xs text-muted-foreground">{entry.value}</span>
                      </div>
                    ))}
                  </div>
                )
              }
              return null
            }}
          />
          {children}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}

